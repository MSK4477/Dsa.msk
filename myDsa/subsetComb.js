class Solution {
    solveNQueens(n) {
        const solutions = [];
        const board = Array.from({ length: n }, () => ".".repeat(n));
        const leftRow = new Array(n).fill(0);
        const upperDiagonal = new Array(2 * n - 1).fill(0);
        const lowerDiagonal = new Array(2 * n - 1).fill(0);
        
        this.solve(0, board, solutions, leftRow, upperDiagonal, lowerDiagonal, n);
        return solutions;
    }

    solve(col, board, solutions, leftRow, upperDiagonal, lowerDiagonal, n) {
        if (col === n) {
            solutions.push([...board]);  // Add a copy of the current board
            return;
        }

        for (let row = 0; row < n; row++) {
            if (leftRow[row] === 0 && lowerDiagonal[row + col] === 0 && upperDiagonal[n - 1 + col - row] === 0) {
                // Place the queen
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                leftRow[row] = 1;
                lowerDiagonal[row + col] = 1;
                upperDiagonal[n - 1 + col - row] = 1;

                // Recur to place the next queen
                this.solve(col + 1, board, solutions, leftRow, upperDiagonal, lowerDiagonal, n);

                // Backtrack: remove the queen
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
                leftRow[row] = 0;
                lowerDiagonal[row + col] = 0;
                upperDiagonal[n - 1 + col - row] = 0;
            }
        }
    }
}

// Example usage:
const solution = new Solution();
const n = 4;
const result = solution.solveNQueens(n);

result.forEach(solution => {
    solution.forEach(row => console.log(row));
    console.log("");
});
