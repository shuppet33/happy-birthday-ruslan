from typing import Dict, Any
from api.test import test1, test2, test3
from RestrictedPython import safe_globals

# source_code = """def task(tree):\n\tif not tree:\n\t\treturn 0\n\tleft_sum = task(tree.left)\n\tright_sum = task(tree.right)\n\treturn tree.value + max(left_sum,right_sum)"""
'''
def task(tree):
  if not tree:
      return 0
  left_sum = task(tree.left)
  right_sum = task(tree.right)
  return tree.value + max(left_sum,right_sum)

\n - перенос строки
\t - табуляция
'''


# source_code = """def task(a, b):\n\tb_set = set(b)\n\tres = [x for x in a if x not in b_set]\n\treturn res"""
'''
def task(a, b):
    b_set = set(b)
    res = [x for x in a if x not in b_set]
    return res
'''
# source_code = """def decodeMorse(morse):\n\treverseMorseCode = {key: value for value, key in morseCode.items() }\n\treturn ''.join(reverseMorseCode[i] for i in morse.split()).lower()"""
'''
def decodeBits(bits: str):
    s = bits
    s = s.replace('111','-')
    s = s.replace('1','.')
    s = s.replace('0000000','0-...-0')
    s = s.replace('00',' ')
    s = s.replace('0','')

    return s

def decodeMorse(morse: str, morseCode):
    reverseMorseCode = {key: value for value, key in morseCode.items() }
    return ''.join(reverseMorseCode[i] for i in morse.split()).lower()
'''

def safe_execute(id: int, text: str, func_name: str) -> Dict[str, Any]:
    
    if id == 1:
        test_result, tests, error = test1(text, func_name).values()
        safe_globals.pop(func_name)
        return {
                "message": 
                    {
                        "result": test_result,
                        "tests": tests
                    },
                "error": error
            }

    if id == 2:
        test_result, tests, error = test2(text, func_name).values()
        safe_globals.pop(func_name)
        return {
                "message": 
                    {
                        "result": test_result,
                        "tests": tests
                    },
                "error": error
            }
    
    if id == 3:
        test_result, tests, error = test3(text, func_name).values()
        safe_globals.pop(func_name)
        return {
                "message": 
                    {
                        "result": test_result,
                        "tests": tests
                    },
                "error": error
            }

    else:
        return {"message": "Invalid task_id"}

