import React from "react"
import Picture from "./Picture"
import { useState, useEffect } from "react";

const PictureContainer = () => {
useEffect(() => {
    fetchImages()
}, [])

const [photos, setPhotos] = useState([])
    const fetchImages = async () => {
        const response = await fetch(`${process.env.REACT_APP_API}?page=2&limit=20`)
        const data = await response.json()
        setPhotos(data)
    }

    return (
    <div className="mainpage">
        {photos.map((item, index) => {
            return (
                <Picture item={item} key={index} />
            )
        })}
    </div>
)}

export default PictureContainer;

