import zipfile
import os

zip_path = r"C:\Users\sharj\mernstack\bitfix\kanary\cpanel_frontend_deployment.zip"
root_dir = r"C:\Users\sharj\mernstack\bitfix\kanary\restuarent_website"

folders_to_include = ['.next', 'public', 'src']
files_to_include = ['package.json', 'package-lock.json']

print("Creating perfectly structured cPanel zip file...")

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for folder in folders_to_include:
        full_folder_path = os.path.join(root_dir, folder)
        if os.path.exists(full_folder_path):
            for root, dirs, files in os.walk(full_folder_path):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, root_dir)
                    zipf.write(file_path, arcname)

    for file in files_to_include:
        full_file_path = os.path.join(root_dir, file)
        if os.path.exists(full_file_path):
            zipf.write(full_file_path, file)

size_mb = os.path.getsize(zip_path) / (1024 * 1024)
print(f"ZIP created successfully! Size: {size_mb:.2f} MB")
