import os
import xml.etree.ElementTree as ET
import argparse

def create_svg_sprite(input_folder, output_file):
    # Create the root SVG element
    root = ET.Element('svg', {
        'xmlns': 'http://www.w3.org/2000/svg',
        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
        'style': 'display: none;'
    })

    # Iterate through SVG files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith('.svg'):
            file_path = os.path.join(input_folder, filename)
            print(f"Processing file: {file_path}")
            
            # Parse the SVG file
            tree = ET.parse(file_path)
            svg_root = tree.getroot()
            
            print(f"Root tag: {svg_root.tag}")
            print(f"Root attributes: {svg_root.attrib}")
            
            # Generate a unique ID and title based on the filename
            unique_id = os.path.splitext(filename)[0].replace(' ', '-').lower()
            title_text = os.path.splitext(filename)[0].replace('-', ' ').replace('_', ' ').title()
            
            # Check if the root is already a symbol
            if svg_root.tag.endswith('symbol'):
                symbol = svg_root
            else:
                # If not, look for a symbol inside
                symbol = svg_root.find('.//{http://www.w3.org/2000/svg}symbol')
            
            if symbol is not None:
                print(f"Found symbol, setting id to: {unique_id}")
                symbol.set('id', unique_id)
                # Remove width and height attributes
                symbol.attrib.pop('width', None)
                symbol.attrib.pop('height', None)
                # Update or add title element
                title_element = symbol.find('.//{http://www.w3.org/2000/svg}title')
                if title_element is None:
                    title_element = ET.Element('{http://www.w3.org/2000/svg}title')
                    symbol.insert(0, title_element)
                title_element.text = title_text
                # Add the symbol to the sprite
                root.append(symbol)
            else:
                print(f"No symbol found in {filename}, converting svg to symbol")
                # Convert svg to symbol
                new_symbol = ET.Element('symbol', svg_root.attrib)
                new_symbol.set('id', unique_id)
                # Remove width and height attributes
                new_symbol.attrib.pop('width', None)
                new_symbol.attrib.pop('height', None)
                # Update or add title element
                title_element = svg_root.find('.//{http://www.w3.org/2000/svg}title')
                if title_element is not None:
                    svg_root.remove(title_element)
                title_element = ET.Element('{http://www.w3.org/2000/svg}title')
                title_element.text = title_text
                new_symbol.append(title_element)
                new_symbol.extend(list(svg_root))
                root.append(new_symbol)

    # Create the output SVG file
    tree = ET.ElementTree(root)
    tree.write(output_file, encoding='utf-8', xml_declaration=True)

    # Debug print
    print(f"Number of symbols in sprite: {len(root)}")

def main():
    # Set up argument parser
    parser = argparse.ArgumentParser(description='Create an SVG sprite from individual SVG files.')
    parser.add_argument('input_folder', help='Path to the folder containing SVG files')
    parser.add_argument('output_file', help='Name of the output SVG sprite file')
    
    # Parse arguments
    args = parser.parse_args()

    # Call the function to create the sprite
    create_svg_sprite(args.input_folder, args.output_file)
    print(f"SVG sprite file '{args.output_file}' has been created successfully.")

if __name__ == '__main__':
    main()
