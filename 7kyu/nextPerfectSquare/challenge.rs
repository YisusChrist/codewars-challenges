/**
 * Challenge: Find the next perfect square!
 */

fn find_next_square(sq: u64) -> Option<u64> {
    let root = (sq as f64).sqrt();
    return if root.fract() == 0.0 {
        Some((root + 1.0).powi(2) as u64)
    } else {
        None
    };
}
