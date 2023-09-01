import shutil

def compress_folder(source_folder, output_path):
    shutil.make_archive(output_path, 'zip', source_folder)
    print(f"Compressed {source_folder} to {output_path}.zip")
