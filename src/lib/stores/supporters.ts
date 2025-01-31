import { writable } from 'svelte/store';

export const supporterCount = writable<number | null>(null);

export async function fetchSupporterCount() {
    try {
        const response = await fetch('https://automation.thebackend.uk/webhook/91ab640f-3a78-498f-bf9f-ebd4841ce225');
        if (!response.ok) throw new Error('Failed to fetch supporter count');
        const data = await response.json();
        supporterCount.set(data.count);
    } catch (error) {
        console.error('Error fetching supporter count:', error);
        supporterCount.set(null);
    }
}
