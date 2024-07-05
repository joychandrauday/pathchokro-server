    // })
    // app.get('/cart-of',async (req,res)=>{
    //   let query = {};
    //   query = { email: req.query.email };

    //   const result=await cartCollection.find(query).toArray()
    //   res.send(result);
    // })
    // app.post('/cart',async(req,res)=>{
    //   const cartItem =req.body;
    //   const result =await cartCollection.insertOne(cartItem)
    //   res.send(result);
    // })
    // app.get('/cart/:id',async(req,res)=>{
    //   // const id =req.params.id;
    //   const query={ menuId: req.params?.id }
    //     const result=await cartCollection.find(query).toArray()
    //     res.send(result);
    // })
    // app.delete('/cart/:id',async(req,res)=>{
    //   // const id =req.params.id;
    //   const query={ menuId: req.params.id }
    //   const result =await cartCollection.deleteOne(query)
    //   res.send(result);
    // })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("PathChokro server is running....");
});
app.listen(port, () => {
  console.log(`the pathchokro server is running on ${port} port`);
});