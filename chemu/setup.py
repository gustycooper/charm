from distutils.core import setup, Extension

def main():
    setup(name="chemu",
          version="2.0.0",
          description="Charmweb - Directory Structure Reorganized",
          author="Lauren Knight - Gusty's email",
          author_email="gusty.cooper@gmail.com",
          ext_modules=[Extension("chemu", ['chemupython.c', 'src/cpu.c', 'src/memory.c', 'src/command.c', 'src/isa.c', 'src/bit_functions.c', 'src/dict.c'],
          depends=['src/bit_functions.h', 'src/charmopcodes.h', 'src/cpu.h', 'src/dict.h', 'src/isa.h', 'src/memory.h'])])
if __name__ == "__main__":
    main()
