const Queue = require('./Queue');

test('1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)', ()=>{
    const queue = new Queue(1)
    expect(queue.empty()).toBe(true);
});

test('2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20', ()=>{
    const queue = new Queue(1)
    queue.enqueue(20)
    expect(queue.dequeue(20)).toBe(20);
});

test('3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)', ()=>{
    const queue = new Queue(1)
    queue.enqueue(1)
    expect(queue.full()).toBe(true);
});

test('4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)', ()=>{
    const queue = new Queue(1)
    queue.enqueue(1)
    expect(queue.enqueue(5)).toBe(false);
});

test('5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน', ()=>{
    const queue = new Queue(2)
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
});

test('6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null', ()=>{
    const queue = new Queue(1)
    queue.dequeue()
    expect(queue.dequeue()).toBe(null);
});

test('7. Bug tail', ()=>{
    const queue = new Queue(2)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()
    queue.dequeue()
    queue.enqueue(2)
    expect(queue.tail).toBe(1);
});

test('8 Bug head', ()=>{
    const queue = new Queue(3)
    expect(queue.enqueue(1)).toBe(true);
    expect(queue.enqueue(2)).toBe(true);
    expect(queue.enqueue(3)).toBe(true);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.head).toBe(0);


});