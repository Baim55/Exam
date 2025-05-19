import React from "react";
import "./Person.css";
import person1 from "../../assets/images/person_1.jpg.webp";
import person2 from "../../assets/images/person_2.jpg.webp";
import person3 from "../../assets/images/person_3.jpg.webp";

const Person = () => {
  return (
    <section id="person-area">
      <div className="container">
        <div className="persons">
          <div className="person">
            <img src={person1} alt="" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              sapiente beatae, nemo quasi quo neque consequatur rem porro
              reprehenderit, a dignissimos unde ut enim fugiat deleniti quae
              placeat in cumque?”
            </p>
            <p className="person-name">-Allie Smith</p>
          </div>
          <div className="person">
            <img src={person2} alt="" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              sapiente beatae, nemo quasi quo neque consequatur rem porro
              reprehenderit, a dignissimos unde ut enim fugiat deleniti quae
              placeat in cumque?”
            </p>
            <p className="person-name">- Harley Perkins</p>
          </div>
          <div className="person">
            <img src={person3} alt="" />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              sapiente beatae, nemo quasi quo neque consequatur rem porro
              reprehenderit, a dignissimos unde ut enim fugiat deleniti quae
              placeat in cumque?”
            </p>
            <p className="person-name">- Levi Morris</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Person;
