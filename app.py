import os
from PIL import Image

# Path to your folder
folder_path = "Cyfernode0.3Photos-lowres"

# Desired quality (lower = smaller size, range 1-95, 85 is a good balance)
QUALITY = 5 

def compress_images(folder):
    for filename in os.listdir(folder):
        file_path = os.path.join(folder, filename)

        # Skip non-image files
        if not (filename.lower().endswith(".jpg") or 
                filename.lower().endswith(".jpeg") or 
                filename.lower().endswith(".png")):
            continue

        try:
            # Open image
            img = Image.open(file_path)

            # Convert PNG to RGB (removes alpha if needed) before saving as JPEG
            if filename.lower().endswith(".png"):
                img = img.convert("RGB")
                file_path = os.path.splitext(file_path)[0] + ".jpg"

            # Save compressed (overwrites the file)
            img.save(file_path, "JPEG", optimize=True, quality=QUALITY)

            print(f"Compressed and replaced: {filename}")

        except Exception as e:
            print(f"Could not process {filename}: {e}")


if __name__ == "__main__":
    compress_images(folder_path)
    print("Compression completed successfully!")