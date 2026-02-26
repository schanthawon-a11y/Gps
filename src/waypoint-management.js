class Waypoint {
    constructor(name, latitude, longitude, description = '') {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
    }
}

class WaypointManager {
    constructor() {
        this.waypoints = [];
    }

    addWaypoint(waypoint) {
        this.waypoints.push(waypoint);
    }

    editWaypoint(index, updatedWaypoint) {
        if (index >= 0 && index < this.waypoints.length) {
            this.waypoints[index] = updatedWaypoint;
        } else {
            throw new Error('Waypoint index out of bounds');
        }
    }

    deleteWaypoint(index) {
        if (index >= 0 && index < this.waypoints.length) {
            this.waypoints.splice(index, 1);
        } else {
            throw new Error('Waypoint index out of bounds');
        }
    }

    createRoute(waypointIndices) {
        return waypointIndices.map(index => {
            if (index >= 0 && index < this.waypoints.length) {
                return this.waypoints[index];
            } else {
                throw new Error('Invalid waypoint index for route creation');
            }
        });
    }
}

// Example usage:

const waypointManager = new WaypointManager();
waypointManager.addWaypoint(new Waypoint('Marker 1', 34.0522, -118.2437, 'Los Angeles'));
waypointManager.addWaypoint(new Waypoint('Marker 2', 36.1699, -115.1398, 'Las Vegas'));

const route = waypointManager.createRoute([0, 1]);  // Create a route with Waypoint 1 and Waypoint 2

console.log(route);