"use client"
import { useParams } from "next/navigation";

export default function WordLearnPage() {
  const params = useParams();

  const handleClick = () => {
    window.history.replaceState({page:1},'',"/new-page");
  };
  
  return <div onClick={handleClick}></div>;
}