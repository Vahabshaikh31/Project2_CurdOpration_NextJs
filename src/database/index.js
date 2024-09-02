import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://vahabs:Svahab3101@cluster0.jb9arqn.mongodb.net/BlogApplication?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("COnnection is Succesfull"))
    .catch((e) => console.log(e));
};

export default connectToDB;
