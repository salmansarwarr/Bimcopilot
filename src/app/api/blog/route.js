import { connectToDatabase } from '../../utils/mongodb'
import { NextResponse } from 'next/server'

export async function GET(req) {
    const db = await connectToDatabase();

    const collection = db.collection('Stories'); 
  
    const data = await collection.find({}).toArray();
  
    return NextResponse.json({ data });
}
