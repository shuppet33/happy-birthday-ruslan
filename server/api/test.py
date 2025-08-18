from RestrictedPython import compile_restricted, safe_globals
from RestrictedPython.Eval import default_guarded_getiter
safe_globals['__metaclass__'] = type
safe_globals['__name__'] = 'test_restrictedpython'
safe_globals['__builtins__'].update({"max": max})
safe_globals['__builtins__'].update({"min": min})
safe_globals['__builtins__'].update({"set": set})
safe_globals['__builtins__'].update({"_getiter_": default_guarded_getiter})
from random import randint
from typing import Dict, Any
import traceback


# default tree-class:
class Node:
    def __init__(self, value, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

# Test trees
trees = [
    {'tree': Node(17, Node(3, Node(2), None), Node(-10, Node(16), Node(1 ,Node(13), None))), 'sum': 23},
    {'tree': Node(5, Node(4, Node(-80), Node(-60)), Node(10, Node(-90), None)), 'sum': -51},
    {'tree': Node(2.8, Node(-7.1, Node(14), Node(-20, None, Node(75.5))),Node(24, Node(-11.4,Node(38), None), Node(4.3, None, Node(-40, Node(25), None)))), 'sum': 53.4}
] 

lists = [
        {
            'list_a': [1, 2, 6, 4, 2, 1, 1, 4], 
            'list_b': [1, 4], 
            'result_list': [2, 6, 2]},
        {
            'list_a': [-3, 4, -4, -6, 0, 2, 1, 8, -1, 6, 1, -1, 0, 10, -8, -8, -4, 2, 1, 9], 
            'list_b': [-4, -8, 1, 6, 10], 
            'result_list': [-3, 4, -6, 0, 2, 8, -1, -1, 0, 2, 9]},
        {
            'list_a': [-1, -5, 2, -6, 7, -1, 8, 2, 3, -8, 0, 6, 3, 7, -8, -7, 2, 4, 4, 0, -1, -1, -5, 9, 3, -5, -9, 0, -5, 2, 9, 9, -9, -7, -3, -3, 4, 1, -8, 7], 
            'list_b': [9, -6, 0, 3, 6, 4, 0, 0, 1, -3], 
            'result_list': [-1, -5, 2, 7, -1, 8, 2, -8, 7, -8, -7, 2, -1, -1, -5, -5, -9, -5, 2, -9, -7, -8, 7]}
]

def safe_user_func(source_code):

    try:
        byte_code = compile_restricted(source_code, '<string>', 'exec')
    except SyntaxError as e:
        return {"func": None, "message": f"Error in code: {e}"}

    try:
        exec(byte_code, safe_globals)
    except Exception as e:
        return {"func": None, "message": "Error: {e}"}

    return {"func": safe_globals['task'], "message": None}

# task1 - task about a binary trees
def test1(source_code: str) -> Dict[str, Any]:

    user_func, check_message = safe_user_func(source_code).values()
    print(user_func)
    if check_message:
        return {"res": '', "error": f"Error: {check_message}"}


    test_result = []
    tests = []
    for i, test_tree in enumerate(trees):
        try:
            result = user_func(test_tree['tree'])
            expected = test_tree['sum']
            if result == expected:
                print(f"Test {i+1}: 'Passed' ")
                test_result.append(1)
                tests.append({
                                f"Test {i+1}:": "Passed",
                                f"Expected value": {expected}
                            })
            else:
                print(f"Test {i+1}: Failed with value {result}")
                test_result.append(0)
                tests.append({
                                f"Test {i+1}:": f"Failed with value {result}",
                                f"Expected value": {expected}
                            })
            print(f"Expected value: {expected}")
            
        except Exception as e:
            print (traceback.format_exc())
            return {"res": '', "tests": '', "error": f"Test failed with error: {e}"}

    print(test_result)
    if test_result:
        return {"res": str(all(test_result)), "tests": tests, "error": ''}
    else:
        return {"res": "False", "tests": tests, "error": ''}

# task2 - task about list difference
def test2(source_code: str) -> Dict[str, Any]:

    user_func, check_message = safe_user_func(source_code).values()
    if check_message:
        return {"res": '', "tests": '', "error": f"Error: {check_message}"}

    test_result = []
    tests = []
    for i, test_list in enumerate(lists):
        try:
            result = user_func(test_list['list_a'], test_list['list_b'])
            expected = test_list['result_list']
            if result == expected:
                print(f"Test {i+1}: 'Passed' ")
                test_result.append(1)
                tests.append({
                                f"Test {i+1}:": "Passed",
                                f"Expected value": {"["+', '.join(list(map(str,expected)))+"]"}
                            })
            else:
                print(f"Test {i+1}: Failed with value {result}")
                test_result.append(0)
                tests.append({
                                f"Test {i+1}:": f"Failed with value {result}",
                                f"Expected value": {"["+', '.join(list(map(str,expected)))+"]"}
                            })
            print(f"Expected value: {expected}")
        
        except Exception as e:
            print (traceback.format_exc())
            return {"res": '', "tests": '', "error": f"Test failed with error: {e}"}
    
    if test_result:
        return {"res": str(all(test_result)), "tests": tests, "error": ''}
    else:
        return {"res": "False", "tests": tests, "error": ''}