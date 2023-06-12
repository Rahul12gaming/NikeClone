export const Post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
       console.log(item);
        return res.status(201).send(item);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed"})}
    }
    export const Get=(model)=>async(req,res)=>
    {
        try{
            const item=await model.find().lean().exec()
            return res.status(200).send(item)
            
        }
        catch(err)
        {
            console.log(err.message);
        }
    }
