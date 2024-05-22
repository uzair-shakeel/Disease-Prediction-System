import predictDisease from '../models/PredictModel.js'

//create new Menu
export const prediction = async (req, res) =>{
    const { symptoms } = req.body;
    console.log("prediction me Symptoms:",symptoms)
    
  try {
    const prediction = await predictDisease(symptoms);
    console.log("prediction: ",prediction)
    res.json({ 
      "success": true,
      "result": prediction
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}