from typing import Dict, Any
from api.test import test1, test2

# source_code = """def task(tree):\n\tif not tree:\n\t\treturn 0\n\tleft_sum = task(tree.left)\n\tright_sum = task(tree.right)\n\treturn tree.value + max(left_sum,right_sum)"""
# source_code = """def task(a, b):\n\tb_set = set(b)\n\tres = [x for x in a if x not in b_set]\n\treturn res"""


def safe_execute(id: int, text: str) -> Dict[str, Any]:
    
    if id == 1:
        test_result, error = test1(text).values()
        return {"message": f"test_rusult: {test_result}", "error": error}
    if id == 2:
        test_result, error = test2(text).values()
        return {"message": f"test_rusult: {test_result}", "error": error}
    else:
        return {"message": "Invalid task_id"}

