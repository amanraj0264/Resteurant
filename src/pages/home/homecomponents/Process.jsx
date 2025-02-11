export const Process = (props) => {
    return (
        <>
            
                
                <div className="flex gap-10 py-2 mt-2 xs:px-4 sm:px-4 md:px-8">
                    
                        <p className="font-num font-normal text-color-secondary text-4xl">{props.num}</p>
                    
                    <div className="font-sora ">
                    <h4 className="text-xl font-bold font-sora">{props.subheading}</h4>
                    <p className=" font-sora text-sm text-color-sub-heading py-3">{props.para}</p>
                    </div>
                </div>
            
        </>
    )
}