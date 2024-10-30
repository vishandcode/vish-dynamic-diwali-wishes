"use client";

import { useParams } from "next/navigation";
import React from "react";

interface Params {
  [name: string]: string | undefined;
}

export default function Home() {
  const { name } = useParams<Params>(); // Use the defined Params type
  const nametobeprinted: string | undefined = name;
  const decodedName: string = decodeURIComponent(nametobeprinted || "")
    .replace(/%20/g, " ")
    .trim();

  // Capitalize the first letter and convert the rest to lowercase
  const capitalized_name =
    decodedName.charAt(0).toUpperCase() + decodedName.slice(1).toLowerCase();

  return (
    <div>
      <h1 className="title">Happy Diwali {capitalized_name} !</h1>
      <p className="quote">
        &quot; May the divine light of Diwali bring peace, prosperity, and
        happiness to all. &quot;
      </p>
      <div className="container p1">
        <div className="box m2 d2">
          <div className="cracker solid a1"></div>
          <div className="cracker dotted a2"></div>
        </div>
      </div>
      <div className="container">
        <div className="box m1">
          <div className="cracker a3"></div>
          <div className="cracker dotted a3"></div>
        </div>
      </div>
      <div className="container">
        <div className="box m1 d1">
          <div className="cracker a2"></div>
          <div className="cracker dotted a2"></div>
        </div>
      </div>
      <div className="container">
        <div className="box m3 d4">
          <div className="cracker solid a2"></div>
          <div className="cracker dotted a3"></div>
        </div>
      </div>
      <div className="container p1">
        <div className="box m2 d3">
          <div className="cracker solid a1"></div>
          <div className="cracker dotted a2"></div>
        </div>
      </div>
      <div className="container p2">
        <div className="box m1 d1">
          <div className="cracker a1"></div>
          <div className="cracker dotted a2"></div>
        </div>
      </div>
      <div className="container p2">
        <div className="box m3 d2">
          <div className="cracker dotted a4"></div>
          <div className="cracker a2"></div>
        </div>
      </div>
      <div className="container p3">
        <div className="box m1 d2">
          <div className="cracker a2"></div>
          <div className="cracker a3"></div>
        </div>
      </div>
      <div className="container p3">
        <div className="box m2 d4">
          <div className="cracker solid a2"></div>
          <div className="cracker a1"></div>
        </div>
        <div className="box m1 d3">
          <div className="cracker dotted a3"></div>
          <div className="cracker dotted a1"></div>
        </div>
      </div>
      <div className="land">
        <div className="block p1"></div>
        <div className="block p2"></div>
        <div className="block p1"></div>
        <div className="block p3"></div>
        <div className="block p4"></div>
        <div className="block p0"></div>
        <div className="block p1"></div>
        <div className="block p4"></div>
        <div className="block p1"></div>
        <div className="block p2"></div>
        <div className="block p0"></div>
        <div className="block p2"></div>
        <div className="block p5"></div>
        <div className="block p3"></div>
        <div className="block p4"></div>
        <div className="block p1"></div>
        <div className="block p2"></div>
        <div className="block p0"></div>
        <div className="block p2"></div>
        <div className="block p5"></div>
        <div className="block p3"></div>
      </div>
    </div>
  );
}
