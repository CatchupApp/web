import React from 'react';
import { ClassInfo } from '../models/classinfo';
import ClassCard from '../components/ClassCard';

interface DashboardProps {
  classes: Array<ClassInfo>
}


class DashboardPage extends React.Component<DashboardProps> {
  render() {
    const classes: Array<ClassInfo> = this.props.classes;

    const classGrid = classes.map((value, index) => {
      return <div className="p-4"><ClassCard classInfo={value}/ ></div>
    })

    return (
      <div className="flex flex-wrap m-auto">
        {classGrid}
      </div>
    );
  }
}

export default DashboardPage;