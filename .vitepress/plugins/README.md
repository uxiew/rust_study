

# usage
```rust,edition2018
use ndarray::arr2;
fn main() {
    let a = arr2(&[[1, 2, 3],
                   [4, 5, 6]]);
    let b = arr2(&[[6, 5, 4],
                   [3, 2, 1]]);
    let sum = &a + &b;
    println!("{}", a);
    println!("+");
    println!("{}", b);
    println!("=");
    println!("{}", sum);
}
```


# Reference
[rust-lang-nursery/rust-cookbook](https://github.com/rust-lang-nursery/rust-cookbook/blob/master/src/science/mathematics/linear_algebra/add-matrices.md?plain=1)
