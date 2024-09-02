import { Button } from "../ui/button";

export async function handleDelete({ id }) {
  try {
    const response = await fetch("/api/delete-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete blog");
    }

    alert("Blog deleted successfully");
    return true; 
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    alert("Failed to delete blog");
    return false; 
  }
}

const DeleteBlog = ({ id, onDeleteSuccess }) => {
  const handleDel = async () => {
    const success = await handleDelete({ id });
    if (success) {
      onDeleteSuccess();
    }
  };

  return (
    <div>
      <Button onClick={handleDel}>Delete</Button>
    </div>
  );
};

export default DeleteBlog;
