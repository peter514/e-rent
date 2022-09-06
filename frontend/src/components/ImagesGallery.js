function ImagesGallery({images}){
    return(
        <div className="row">
        {
        images.map((url)=>{
            return (
                <div className="col-sm-1">
                <div className="upload-display col4">
                <img src={url} className=" upload-image responsive-img"/>
                </div>
                </div>
            )
        })
        }
        
        </div>
    )
}

export default ImagesGallery;