function solution(my_string, is_suffix) {

    return my_string.lastIndexOf(is_suffix) == my_string.replace(is_suffix,'').length ? 1 : 0;
}
  