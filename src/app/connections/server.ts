import app from "../.."




async function main (){
    
    try {
        
        app.listen(3000,()=>{
            console.log("server is running perfectly fine.")
        })

    } catch (error) {
        console.log("🚀 ~ file: server.ts:10 ~ main ~ error:", error)   
    }
}

main()






