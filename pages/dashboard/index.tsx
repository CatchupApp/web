import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import {User, UserContext} from '../../utils/user';
import { useRouter } from "next/router";
import { ClassInfo } from '../../models/classinfo';
import ClassCard from '../../components/ClassCard';

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext)

  const [classes, setClasses] = useState([]);

  const userId = user.id;

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.SERVER_BASE_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClasses(res.data.classes);
      })
      .catch((err) => console.log(err));
  }, [user]);

  const classGrid = classes.map((classDetails, i) => {
    return (
      <div className="p-4" key={i}>
        <ClassCard name={classDetails.name}></ClassCard>
      </div>
    )
  })

  return <div className="flex flex-wrap m-auto">{classGrid}</div>;
}

export default DashboardPage;