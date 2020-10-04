import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { UserContext } from "../../utils/user";
import { Video } from "../../models/classinfo";
import ThumbnailImage from "../../components/ThumbnailImage";

const VideoPage = () => {
  const router = useRouter();
  const [user, setuser] = useContext(UserContext);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const classId = router.query.class;
    if (user && classId) {
      const token = localStorage.getItem("token");
      axios
        .get(`${process.env.SERVER_BASE_URL}/class/${classId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setVideos(res.data.videos);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const lectureGrid = videos.map((video, i) => {
    return (
      <div className="p-4" key={i}>
        <ThumbnailImage video={video} />
      </div>
    );
  });

  return <div className="flex flex-wrap m-auto">{lectureGrid}</div>;
};

export default VideoPage;
