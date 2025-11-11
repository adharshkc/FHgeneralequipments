import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Table,
  Form,
  Button,
  Container,
  Image,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch, FaEdit, FaTrash, FaTag } from "react-icons/fa";
import { toast } from "react-toastify";

function Products() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load categories and products when component mounts
  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  // ✅ Fetch all categories
  const loadCategories = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/category/view");
      if (res.data.success) {
        setCategories(res.data.categories);
      }
    } catch (error) {
      console.error("❌ Error loading categories:", error);
      toast.error("Failed to load categories");
    }
  };

  const loadProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/product/viewallProducts"
      );
      const productsData = res.data.products || res.data; // support both formats

      if (Array.isArray(productsData) && productsData.length > 0) {
        setProducts(productsData);
      } else {
        toast.warning("No products found");
      }
    } catch (error) {
      console.error("❌ Error loading products:", error);
      toast.error("Failed to load products");
    }
  };

  // ✅ Search products by name or category
  const searchProducts = async (data) => {
    try {
      const payload = {
        product_name: data.product_name || "",
        CAT_ID: selectedCategory || "",
      };

      const res = await axios.post(
        "http://localhost:5000/api/product/search",
        payload
      );
      if (res.data.success) {
        setProducts(res.data.products);
        toast.info(`${res.data.products.length} products found`);
      } else {
        toast.warning("No matching products found");
      }
    } catch (error) {
      console.error("❌ Search error:", error);
      toast.error("Search failed");
    }
  };

  // ✅ Filter products by selected category only
  const filterByCategory = async (catId) => {
    setSelectedCategory(catId);
    if (!catId) {
      loadProducts(); // if no category, load all products
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/product/view-by-category",
        {
          CAT_ID: catId,
        }
      );
      if (res.data.success) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.error("❌ Error filtering by category:", error);
      toast.error("Failed to filter products");
    }
  };

  // ✅ Open delete modal
  const handleShow = (pid) => {
    setSelectedProduct(pid);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  // ✅ Delete product
  const deleteProduct = async () => {
    if (!selectedProduct) return;
    try {
      const res = await axios.post("http://localhost:5000/api/product/delete", {
        id: selectedProduct,
      });
      if (res.data.success) {
        toast.success("Product deleted successfully");
        setProducts((prev) => prev.filter((p) => p._id !== selectedProduct));
      } else {
        toast.error("Failed to delete product");
      }
    } catch (error) {
      console.error("❌ Delete error:", error);
      toast.error("Server error while deleting");
    } finally {
      handleClose();
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 fw-bold">Manage Products</h2>

      {/* 🔍 Search & Filter Form */}
      <Form
        onSubmit={handleSubmit(searchProducts)}
        className="p-3 border rounded shadow bg-light mb-4"
      >
        <Row className="align-items-center">
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Search by product name"
              {...register("product_name")}
              className="me-2"
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={selectedCategory}
              onChange={(e) => filterByCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.category_name}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button type="submit" variant="primary" className="w-100">
              <FaSearch className="me-1" /> Search
            </Button>
          </Col>
        </Row>
      </Form>

      {/* 📋 Products Table */}
      <Table
        striped
        bordered
        hover
        responsive
        className="mt-4 bg-white text-center"
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Product Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p._id}>
                <td>
                  {p.main_image ? (
                    <Image
                      src={`http://localhost:5000/${p.main_image}`}
                      alt="product"
                      height="80"
                      width="80"
                      rounded
                    />
                  ) : (
                    <span className="text-muted">No Image</span>
                  )}
                </td>
                <td>{p.prod_id}</td>
                <td>{p.product_name}</td>
                <td>{p.CAT_ID?.category_name || "—"}</td>
                <td>{p.description}</td>
                <td>{p.product_info || "—"}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    href={`/admin/edit-product/${p._id}`}
                    className="me-2"
                  >
                    <FaEdit /> Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleShow(p._id)}
                    className="me-2"
                  >
                    <FaTrash /> Delete
                  </Button>
                  <Button
                    variant="info"
                    size="sm"
                    href={`/admin/product-images/${p._id}`} // 🔹 redirect to ProductImages page
                    className="me-2"
                  >
                    <FaTag /> Set Thumbnail
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center text-muted">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* 🗑️ Delete Confirmation Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product? <br />
          <strong>This action cannot be undone.</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteProduct}>
            <FaTrash className="me-1" /> Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Products;
