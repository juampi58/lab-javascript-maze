var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft= function(){
  switch (this.min.dir) {
    case 0:
      this.miner.dir=3;
      break;
    case 1:
      this.miner.dir=0;
      break;
    case 2:
      this.miner.dir=1;
      break;
    case 3:
      this.miner.dir=2;
      break;
  }
};

Maze.prototype.turnRight     = function(){
  switch (this.min.dir) {
    case 0:
      this.miner.dir=1;
      break;
    case 1:
      this.miner.dir=2;
      break;
    case 2:
      this.miner.dir=3;
      break;
    case 3:
      this.miner.dir=0;
      break;
  }
};

Maze.prototype.isPathForward = function(){
if(this.miner.dir===0){
  if (this.miner.row===0){
    return false;
  }
  else if(this._maze[this.miner.col][this.miner.row-1]==F){
    return false;
  }
  else{
    return true;
  }
}
  if(this.miner.dir===1){
    if (this.min.col===5){
      return false;
    }
    else if(this._maze[this.miner.col+1][this.miner.row]==F){
      return false;
    }
    else{
      return true;
    }
    }
    if(this.miner.dir===2){
      if (this.min.row===5){
        return false;
      }
      else if(this._maze[this.miner.col][this.miner.row+1]==F){
        return false;
      }
      else{
        return true;
      }
      }
      if(this.miner.dir===3){
        if (this.min.col===0){
          return false;
        }
        else if(this._maze[this.miner.col-1][this.miner.row]==F){
          return false;
        }
        else{
          return true;
        }
        }
  };


Maze.prototype.isPathLeft    = function(){
  if(this.miner.dir===0){
    if (this.miner.col===0){
      return false;
    }
    else if(this._maze[this.miner.col-1][this.miner.row]==F){
      return false;
    }
    else{
      return true;
    }
  }
    if(this.miner.dir===1){
      if (this.min.row===0){
        return false;
      }
      else if(this._maze[this.miner.col][this.miner.row-1]==F){
        return false;
      }
      else{
        return true;
      }
      }
      if(this.miner.dir===2){
        if (this.min.col===5){
          return false;
        }
        else if(this._maze[this.miner.col+1][this.miner.row]==F){
          return false;
        }
        else{
          return true;
        }
        }
        if(this.miner.dir===3){
          if (this.min.row===5){
            return false;
          }
          else if(this._maze[this.miner.col][this.miner.row+1]==F){
            return false;
          }
          else{
            return true;
          }
          }
};

Maze.prototype.isPathRight   = function(){
  if(this.miner.dir===0){
    if (this.miner.col===5){
      return false;
    }
    else if(this._maze[this.miner.col+1][this.miner.row]==F){
      return false;
    }
    else{
      return true;
    }
  }
    if(this.miner.dir===1){
      if (this.min.row===5){
        return false;
      }
      else if(this._maze[this.miner.col][this.miner.row+1]==F){
        return false;
      }
      else{
        return true;
      }
      }
      if(this.miner.dir===2){
        if (this.min.col===0){
          return false;
        }
        else if(this._maze[this.miner.col-1][this.miner.row]==F){
          return false;
        }
        else{
          return true;
        }
        }
        if(this.miner.dir===3){
          if (this.min.row===0){
            return false;
          }
          else if(this._maze[this.miner.col][this.miner.row-1]==F){
            return false;
          }
          else{
            return true;
          }
          }
};

Maze.prototype.moveForward   = function(){
  switch (this.miner.dir) {
    case expression:

      break;
    default:

  }

};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
