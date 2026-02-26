// Membership and Payment System Functionality

class MembershipSystem {
    constructor() {
        this.members = [];
    }

    addMember(name, email) {
        const newMember = { id: this.members.length + 1, name, email, status: 'active' };
        this.members.push(newMember);
        return newMember;
    }

    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
    }

    getMember(id) {
        return this.members.find(member => member.id === id);
    }

    listMembers() {
        return this.members;
    }

    handlePayment(memberId, amount) {
        const member = this.getMember(memberId);
        if (!member) {
            throw new Error('Member not found.');
        }

        // Here you would normally integrate with a payment gateway
        console.log(`Processing payment of ${amount} for member ${member.name}`);
        return `Payment of ${amount} for ${member.name} has been processed.`;
    }
}

// Usage Example:
const membershipSystem = new MembershipSystem();
membershipSystem.addMember('John Doe', 'john@example.com');
membershipSystem.handlePayment(1, 100);
console.log(membershipSystem.listMembers());
