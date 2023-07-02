import { useDispatch, useSelector } from "react-redux";
import { Table, Tag } from "antd";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { addFormData } from "../Slices/FormSlice";
import { useNavigate } from "react-router-dom";

function MyTable() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/getFormData");
      console.log(response.data, "////");
      dispatch(addFormData(response.data));
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(formData, "nihit");
  const flattenedData = formData.flat();
  console.log(flattenedData, "lll");

  const columns = [
    {
      title: "Full Name",
      dataIndex: "Fullname",
      key: "Fullname",
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone Number",
      dataIndex: "Phonenumber",
      key: "Phonenumber",
    },
    {
      title: "Department",
      dataIndex: "Department",
      key: "Department",
    },
    {
      title: "Position",
      dataIndex: "Position",
      key: "Position",
    },
    {
      title: "Experience",
      dataIndex: "Experience",
      key: "Experience",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (status) => (
        <span>
          <Tag color={status === "full time" ? "green" : "red"}>{status}</Tag>
        </span>
      ),
    },
  ];

  return (
    <>
      <Table dataSource={flattenedData} columns={columns} key={columns.key} />
      <button onClick={() => navigate("/")} className="button">
        Add Data
      </button>
    </>
  );
}

export default MyTable;
