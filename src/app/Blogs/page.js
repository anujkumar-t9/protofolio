
const headerStyle = "flex justify-between"
const NameStyle = "pl-1 text-2xl text-grey font-bold"
const dateStyle = "text-xs inline-centre pr-0.5"
const contentStyle = "mt-2 mx-1"
const TitleStyle = "text-lg  font-semibold"
export default function Blogs(){
    
    return (
        <>
        
        <div className=" pb-10 py-20 ">

            <div className="my-8 bg-sky text-white shadow-skylg shadow-2xl rounded-md w-50 h-40">
                <div className={headerStyle}>
                    <h1 className={NameStyle}>Anuj Kr.</h1> 
                    <p className={dateStyle}>date:</p>
                </div>
                
                <div className={contentStyle}>
                    <h2 className={TitleStyle}>Message</h2>
                    <p>Hello World</p>
                </div>
            </div>

            <div className="bg-sky text-white shadow-skylg shadow-2xl rounded-md w-50 h-40">
                <div className={headerStyle}>
                    <h1 className={NameStyle}>Anuj Kr.</h1> 
                    <p className={dateStyle}>date:</p>
                </div>
                
                <div className={contentStyle}>
                    <h2 className={TitleStyle}>First Post</h2>
                    <p>What Up Guz</p>
                    <p>Peace Out!!</p>
                </div>
            </div>
        </div>
        
        </>
    )
}