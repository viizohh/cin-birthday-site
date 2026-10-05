#!/usr/bin/env python3
import os
from rembg import remove
from PIL import Image

# Input and output directories
input_dir = os.path.expanduser("~/Downloads/MossForSite")
output_dir = os.path.expanduser("~/Downloads/cin/cin-birthday-site/images/moss-transparent")

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Process each image
for filename in os.listdir(input_dir):
    if filename.startswith('.'):
        continue

    input_path = os.path.join(input_dir, filename)

    # Generate output filename (convert to PNG)
    base_name = os.path.splitext(filename)[0]
    output_filename = f"{base_name}.png"
    output_path = os.path.join(output_dir, output_filename)

    print(f"Processing {filename}...")

    try:
        # Open image
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()

        # Remove background
        output_data = remove(input_data)

        # Save as PNG
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)

        print(f"  ✓ Saved to {output_filename}")
    except Exception as e:
        print(f"  ✗ Error processing {filename}: {e}")

print("\nDone! All backgrounds removed.")
