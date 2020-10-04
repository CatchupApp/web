import Input from "../components/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Button } from "../components/Button";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UserContext } from "../utils/user";
import axios from "axios";

const UploadPage = () => {
  const router = useRouter();
  const [user, setuser] = useContext(UserContext);

  const [selectedFile, setFile] = useState(undefined);
  const [text, updateText] = useState("");
  
  const onFileChange = event => {
    setFile(event.target.files[0]) 
  }

  const onTextChange = event => {
    updateText(event.target.value)
  }

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("name", text);
    const classId = router.query.class;

    axios.post(`/class/${classId}/video`, formData);
  }

  return (
    <div className="flex fixed items-center w-screen h-screen">
      <div className="block w-64 m-auto">
        <div className="text-3xl font-extrabold">Upload a Video</div>
        <Input
          placeholder="Video Name"
          icon={AiOutlineCloudUpload}
          value={text}
          onChange={onTextChange}
        />
        <input type="file" accept="image/*" className="my-2" onChange={onFileChange}></input>
        <Button
          text="Create &amp; Upload Video"
          className="flex-1 w-full"
          color="bg-green-600"
          onClick={() => {uploadFile()}}
        />
      </div>
    </div>
  );
}

export default UploadPage;
