let model, webcam, labelContainer, maxPredictions;
const URL = "https://teachablemachine.withgoogle.com/models/aUJIH0EEL/";
const modelURL = URL + "model.json";
const metadataURL = URL + "metadata.json";

model = await tmImage.load(modelURL, metadataURL);
maxPredictions = model.getTotalClasses();

//async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(imgConsulta);
    for (let i = 0; i < maxPredictions; i++) {
        if (prediction[i].probability >0.85){
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        return classPrediction;
        }
        else
        return "";
    }
//}