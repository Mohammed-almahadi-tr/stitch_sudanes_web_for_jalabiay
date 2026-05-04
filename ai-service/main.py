import sys
import os
import shutil
import tempfile
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
import uvicorn

# Add the tailorvision module to the path
current_dir = os.path.dirname(os.path.abspath(__file__))
tool_dir = os.path.join(current_dir, "tailoring-grade_anthropometric_Python_tool")
if tool_dir not in sys.path:
    sys.path.append(tool_dir)

try:
    from tailorvision.pipeline import TailorVisionPipeline
    from tailorvision.config import PipelineConfig
except ImportError as e:
    print(f"Failed to import tailorvision: {e}")

app = FastAPI(title="Heritage Digital AI Measurement Service")

@app.post("/analyze")
async def analyze_measurements(
    front_image: UploadFile = File(None),
    side_image: UploadFile = File(None),
    height_cm: float = Form(175.0)
):
    """
    AI measurement endpoint utilizing the TailorVision pipeline.
    """
    print(f"Received request for analysis with height: {height_cm}cm")

    if not front_image or not side_image:
        raise HTTPException(status_code=400, detail="Both front and side images are required")

    with tempfile.TemporaryDirectory() as temp_dir:
        front_path = os.path.join(temp_dir, "front.jpg")
        side_path = os.path.join(temp_dir, "side.jpg")

        with open(front_path, "wb") as f:
            shutil.copyfileobj(front_image.file, f)
        
        with open(side_path, "wb") as f:
            shutil.copyfileobj(side_image.file, f)

        try:
            config = PipelineConfig(
                known_height_cm=height_cm,
                gender="male",  # Could be parameterized later if needed
                garment_type="traditional",
            )
            pipeline = TailorVisionPipeline(config)
            result = pipeline.run(front_path, side_path)
            
            return {
                "success": True,
                "measurements": result.measurements_cm,
                "confidence": result.measurement_confidence,
                "uncertainty_cm": result.uncertainty_cm,
                "tailoring_recommendations": result.tailoring_recommendations,
                "message": "AI analysis completed successfully"
            }
        except Exception as e:
            import traceback
            traceback.print_exc()
            raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5001)
