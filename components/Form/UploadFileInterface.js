import { useState } from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import { storage } from "../../Firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadFileInterface = ({ file, codigo }) => {
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [failed, setFailed] = useState(false);
  const [url, setUrl] = useState("/");

  const uploadFile = () => {
    setUploading(true);
    setCompleted(false);
    setFailed(false);
    const storageRef = ref(storage, `temp/${codigo}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        setCompleted(true);
        getDownloadURL(snapshot.ref).then((url) => {
          setUrl(url);
        });
      })
      .catch((error) => {
        console.log(error);
        setFailed(true);
      });
    setUploading(false);
  };

  return (
    <Container className="mt-3">
      <a onClick={uploadFile}>Iniciar Envio</a>
      {uploading && <ProgressBar now={100} animated />}
      {completed && (
        <div>
          <a href={url}>Anexo</a>
        </div>
      )}
      {failed && <div style={{ color: "red" }}>X</div>}
    </Container>
  );
};

export default UploadFileInterface;
