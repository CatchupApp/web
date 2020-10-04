import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { User, UserContext } from "../../utils/user";
import { useRouter } from "next/router";
import { ClassInfo } from "../../models/classinfo";
import ClassCard from "../../components/ClassCard";

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");
    if (token && userId) {
      axios
        .get(`${process.env.SERVER_BASE_URL}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setClasses(res.data.classes);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const classGrid = classes.map((theClass, i) => {
    return (
      <Link key={i} href={`/videos?class=${theClass.id}`}>
        <div className="p-4 cursor-pointer">
          <ClassCard classInfo={theClass} />
        </div>
      </Link>
    );
  });

  return <div className="flex flex-wrap m-auto">{classGrid}</div>;
};

export default DashboardPage;
