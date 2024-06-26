import os
import glob

def delete_extra_scss_files(root_dir, extensions):
    for ext in extensions:
        pattern = os.path.join(root_dir, '**', f'*.{ext}')
        files = glob.glob(pattern, recursive=True)
        for file in files:
            try:
                os.remove(file)
                print(f"Deleted: {file}")
            except OSError as e:
                print(f"Error deleting {file}:", e)

if __name__ == "__main__":
    current_dir = os.getcwd()
    extensions_to_delete = ['css', 'map']
    delete_extra_scss_files(current_dir, extensions_to_delete)
