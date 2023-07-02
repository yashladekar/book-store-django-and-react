import React from "react";
import FeatureCard from "../FeatureCard";
function Categories() {
  const categories = [
    {
      id: 1,
      name: "fiction",
      image_url:
        "https://images.pexels.com/photos/3248644/pexels-photo-3248644.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-3248644.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "non fiction",
      image_url:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "spirituality",
      image_url: "https://i.insider.com/611fc26f1c47770019e6950e?width=700",
    },
    {
      id: 4,
      name: "programming",
      image_url:
        "https://simpleprogrammer.com/wp-content/uploads/2019/04/The-Art-of-Computer-Programming-Volumes-1-4A.jpg",
    },
    {
      id: 5,
      name: "history",
      image_url:
        "https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill",
    },
    {
      id: 6,
      name: "finance",
      image_url:
        "https://media.cnn.com/api/v1/images/stellar/prod/underscored-personal-finance-books-lead.jpg?q=h_1876,w_3200,x_0,y_0",
    },
    {
      id: 7,
      name: "psychology",
      image_url:
        "https://5.imimg.com/data5/SELLER/Default/2020/8/IN/BJ/NY/94559699/human-psychology-books.jpg",
    },
    {
      id: 8,

      name: "self help",
      image_url: "https://m.media-amazon.com/images/I/51NfcwrhTxL._SY346_.jpg",
    },
    {
      id: 9,
      name: "productivity",
      image_url:
        "https://timeular.com/wp-content/uploads/2022/06/Productivity-Project-Accomplishing-More-Managing-Your-Time-Attention-Energy-Chris-Bailey.jpeg",
    },
  ];

  if (categories.length === 0) return <h1>Loading...</h1>;

  return <FeatureCard cards={categories} />;
}

export default Categories;
