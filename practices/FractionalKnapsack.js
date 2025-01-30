class Item {
    constructor(profit, weight) {
        this.profit = profit;
        this.weight = weight;
    }
}

function fractionalKnapsack(W, items) {

    // Step 1: Max-Heap তৈরি করার জন্য Priority Queue ব্যবহার করি
    let maxHeap = []

    // প্রতিটি আইটেমের রেশিও বের করে Max-Heap এ যুক্ত করি
    for (let item of items) {
        let ratio = item.profit / item.weight;
        maxHeap.push({
            ratio: ratio,
            item: item,
        });
    }

    // Max-Heap (Priority Queue) তৈরি করার জন্য রেশিও অনুসারে সাজাই
    maxHeap.sort((a, b) => b.ratio - a.ratio);

    let totalProfit = 0;
    let remainingWeight = W;

    // Max-Heap থেকে সর্বোচ্চ রেশিও আইটেমগুলো বারবার বের করে যুক্ত করি
    for (let entry of maxHeap) {
        let item = entry.item;

        // ব্যাগ পূর্ণ হলে লুপ শেষ
        if (remainingWeight === 0) break;

        if (item.weight <= remainingWeight) {
            // পুরো আইটেমটি ব্যাগে রাখি
            totalProfit += item.profit;
            remainingWeight -= item.weight;
        } else {
            // ফ্র্যাকশনাল অংশ রাখি
            let fraction = remainingWeight / item.weight;
            totalProfit += fraction * item.profit;
            remainingWeight = 0;
        }
    }

    return totalProfit;
}


// উদাহরণ: ব্যাগের ক্ষমতা এবং আইটেম
let W = 15;
let items = [
    new Item(5, 1),
    new Item(10, 3),
    new Item(15, 5),
    new Item(7, 4),
    new Item(8, 1),
    new Item(9, 3),
    new Item(4, 2)
];

let maxProfit = fractionalKnapsack(W, items);
console.log("Maximum profit = ", maxProfit);