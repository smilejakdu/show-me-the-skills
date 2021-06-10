import React , {useState , useCallback} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Card , Button } from "react-bootstrap";
import music_image from "../../utils/images/music.jpeg";
import {
  CardBorder,
  CardContent,
  CardTitle,
  CardBottomBorder,
} from "./ProductCard.style";
import { IoEllipseSharp } from "react-icons/io5";

const ProductCard=()=> {
  // const id = useSelector((state) => state.user.me?.id);

  return (
    <div>
      <CardBorder style={{ width: "25%" }}>
        <Card.Img variant="top" src={`${music_image}`} style={{height:"auto",maxWidth:"100%"}}/>
        <Card.Body>
          <CardTitle>
           <IoEllipseSharp style={{fontSize:"10px", color:"blue"}}/>
            1:1 수업
          </CardTitle>
          <CardContent>
            전문가에게 배우는 작곡
          </CardContent>
          <CardBottomBorder>
            <p className="register">상시 신청</p>
            <p>람쥐우성</p>
          </CardBottomBorder>
        </Card.Body>
      </CardBorder>
    </div>
  );
}

export default ProductCard
