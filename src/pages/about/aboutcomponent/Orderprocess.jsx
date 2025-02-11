export const Orderprocess=(props)=>{
    return (
        <>
        <div className="flex items-start gap-6 ">

            <div>
                <h1 className="text-4xl font-num font-normal text-color-secondary">{props.num}</h1>

                </div>

                <div>
                <h4 className="text-xl font-sora font-bold">{props.step}</h4>
                <p className="font-sora text-sm text-color-sub-heading mt-5">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
                </div>
            
            

        </div>
        </>
    );
}