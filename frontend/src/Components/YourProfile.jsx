import React, { useState, useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon } from "@hugeicons/core-free-icons";
import { QRCodeCanvas } from "qrcode.react";
import { toast} from "react-toastify";

const YourProfile = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const [credential, setCredential] = useState({
    field: "name",
    oldValue: "",
    newValue: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p className="mt-28 text-center">Loading....</p>;

  // Handle form changes
  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  // Save changes
  const saveChanges = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(credential),
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data.message || "Credentials updated successfully");
        toast.success("Credentials updated successfully!")
        formRef.current.reset();
        setCredential({
          field: "name",
          oldValue: "",
          newValue: ""
        });
      } else {
        console.log(data.message || "Failed to update credentials");
        toast.error("Failed to update credentials!");
      }
    } catch (err) {
      console.log("An error occurred. Please try again", err);
    } finally {
      setIsLoading(false);
    }
  };

  // const deleteAccount = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/user/delete", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });

  //     const data = await res.json();
  //     if (res.ok) {
  //       console.log(data.message || "User deleted successfully");
  //       localStorage.removeItem("token");
  //       window.location.href = "/";
  //     }
  //     else {
  //       console.log(data.error || data.message || "Failed to delete account");
  //     }
  //   } catch (err) {
  //     console.log("An error occurred. Please try again", err);
  //   }
  // };

    const confirmDeleteAccount = () => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-red-600">
            Are you sure you want to delete your account?
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={async () => {
                try {
                  const res = await fetch("http://localhost:3000/user/delete", {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  });

                  const data = await res.json();
                  if (res.ok) {
                    toast.success("Account deleted successfully!");
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  } else {
                    toast.error(data.error || data.message || "Failed to delete account");
                  }
                } catch (err) {
                  console.log("An error occurred. Please try again", err);
                  toast.error("Something went wrong!");
                }
                closeToast();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Yes, Delete
            </button>
            <button
              onClick={closeToast}
              className="px-3 py-1 bg-gray-300 text-black rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  const userId = user._id;
  const reportURL = `http://localhost:3000/user/${userId}/view-reports`;

  return (
    <>
      <div className="mt-28 flex justify-center ">
        <div className="flex justify-center items-center gap-8 border-2 border-healthcare-primary shadow-healthcare-secondary shadow-md m-10 p-5 px-8">
          <HugeiconsIcon
            icon={UserCircleIcon}
            size={88}
            color="#166534"
            strokeWidth={1.5}
            className="hover:cursor-pointer"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-healthcare-primary">
              {user.userName}
            </h1>
            <div className="flex gap-4 items-center">
              <h3 className="font-semibold">Name:</h3>
              <h3 className="border-2 font-semibold text-xl text-healthcare-primary">{user.name}</h3>
            </div>
            <div className="flex gap-4 items-center">
              <h3 className="font-semibold">Email:</h3>
              <h3 className="border-2 font-semibold text-xl text-healthcare-primary">{user.email}</h3>
            </div>
            <div className="flex gap-4 items-center">
              <h3 className="font-semibold">Phone:</h3>
              <h3 className="border-2 font-semibold text-xl text-healthcare-primary">{user.phone}</h3>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-semibold">Share Reports</h2>
            <QRCodeCanvas value={reportURL} bgColor="#ffffff" fgColor="#166534" />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary m-2 p-3 px-5 rounded-[32px] font-semibold hover:font-bold" onClick={() => setOpen(!open)}>
          Edit Profile
        </button>
        <button className="bg-gradient-to-r from-healthcare-primary to-healthcare-secondary m-2 p-3 px-5 rounded-[32px] font-semibold hover:font-bold" onClick={confirmDeleteAccount}>
          Delete Account
        </button>
      </div>

      {open && (
        <div className="mt-5 flex flex-col items-center">
          <form onSubmit={saveChanges} ref={formRef} className="flex flex-col gap-3 border p-5 rounded-lg w-1/2">
            <label className="font-semibold">Select Field</label>
            <select
              name="field"
              value={credential.field}
              onChange={handleChange}
              className="border p-2"
            >
              <option value="name">Name</option>
              <option value="password">Password</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>

            <input
              type="text"
              name="oldValue"
              placeholder="Old Value"
              value={credential.oldValue}
              onChange={handleChange}
              className="border p-2"
            />
            <input
              type="text"
              name="newValue"
              placeholder="New Value"
              value={credential.newValue}
              onChange={handleChange}
              className="border p-2"
            />

            <button
              type="submit"
              className="bg-healthcare-primary text-white p-2 rounded-lg hover:font-bold" disabled={isLoading}>
              {isLoading ? "Saving Changes..." : "Save Changes"}
            </button>
          </form>
        </div>)}
    </>
  );
};

export default YourProfile;
