import { Dialog } from "@headlessui/react";
import { Button } from "../ui/button";

const AddNewBlog = ({
  openDialog,
  setOpenDialog,
  loading,
  blogFormData,
  setBlogFormData,
  handleBlogData,
}) => {
  return (
    <div className="flex items-center justify-center">
      <Button onClick={() => setOpenDialog(true)}>Add New Blog</Button>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-md p-6 max-w-md w-full">
            <Dialog.Title className="text-xl font-bold mb-4">
              Add New Blog
            </Dialog.Title>
            <form onSubmit={handleBlogData}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={blogFormData.title}
                  onChange={(e) =>
                    setBlogFormData({
                      ...blogFormData,
                      title: e.target.value,
                    })
                  }
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={blogFormData.description}
                  onChange={(e) =>
                    setBlogFormData({
                      ...blogFormData,
                      description: e.target.value,
                    })
                  }
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  onClick={() => setOpenDialog(false)}
                  className="bg-gray-300 text-gray-700"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default AddNewBlog;
