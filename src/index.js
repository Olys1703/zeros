module.exports = function zeros(expression) {
  // my solution
  let index, jndex
  let tmp_number, num_5, num_2
  var buf_2 = 0
  var buf_5 = 0
  var number = 0
  for (index = 0; index < expression.length; index++) {
    if (expression[index] == '*' || expression[index] == '!')
    {
      if (expression[index] == '*') {
        // for *
        

      }
      else {
        if (index + 1 < expression.length && expression[index + 1] == '!')
        {
          // for !!
          index = index + 1
          num_5 = 0
          tmp_number = number
          for (tmp_number; tmp_number > 1; tmp_number -= 2 ) {
            tmp_num_5 = tmp_number
            while (tmp_num_5 >= 5 && tmp_num_5 % 5 == 0) {
                tmp_num_5 = tmp_num_5 / 5
                num_5 ++
            }
          }
          num_2 = 0
          tmp_number = number
          for (tmp_number; tmp_number > 1; tmp_number -= 2) {
            tmp_num_2 = tmp_number
            while (tmp_num_2 >= 2 && tmp_num_2 % 2 == 0) {
                tmp_num_2 = tmp_num_2 / 2
                num_2 ++
            }
          }
        }
        else {
          // for !
          num_5 = 0
          tmp_number = number
          for (tmp_number; tmp_number > 1; tmp_number--) {
            tmp_num_5 = tmp_number
            while (tmp_num_5 >= 5 && tmp_num_5 % 5 == 0) {
                tmp_num_5 = tmp_num_5 / 5
                num_5 ++
            }
          }
          num_2 = 0
          tmp_number = number
          for (tmp_number; tmp_number > 1; tmp_number--) {
            tmp_num_2 = tmp_number
            while (tmp_num_2 >= 2 && tmp_num_2 % 2 == 0) {
                tmp_num_2 = tmp_num_2 / 2
                num_2 ++
            }
          }
        }
        buf_2 = +buf_2 + +num_2
        buf_5 = +buf_5 + +num_5
      }
      number = 0
    }
    else
    {
      // for number
      number = +number*10 + +expression[index]
        }
  }


  if (buf_2 < buf_5) {
    return (buf_2)
  }
  else {
    return (buf_5)
  }
  
}
