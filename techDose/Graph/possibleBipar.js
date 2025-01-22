/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const pq = new MinPriorityQueue({ priority: x => x[0] });
function dfs(i, adj, color, c) { 

    if(color[i] ==  -1) { 
      color[i] = c;
    }else  {
        return color[i] == c;
    }

    for(let next of adj[i]) { 

        if(color[next] == -1) { 
            if(!dfs(next, adj, color, 1-color[i])) { 
               return false;
            }
        }else if(color[i] === color[next]) { 
                return false;
            }
    }

    return true;
 }
var possibleBipartition = function(n, dislikes) {
    
    let adj = Array.from({length : n + 1},() => []);

    for(let i = 0; i < dislikes.length; ++i )  {
        adj[dislikes[i][0]].push(dislikes[i][1])
        adj[dislikes[i][1]].push(dislikes[i][0])
    }

    let color = new Array(n+1).fill(-1)

    for(let i = 1; i <= n; ++i) { 
        if(color[i] == -1) {  
        if(!dfs(i, adj, color, 0)) { 
            return false
        }
        }
    }

    return true ;
};