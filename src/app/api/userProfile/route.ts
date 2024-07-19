import { NextResponse } from 'next/server';
import { getXataClient } from '@/xata';

const xata = getXataClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
  }

  try {
    const user = await xata.db.userDetails.filter({ userId: userId }).getFirst();

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch user details', error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { userId, fullName, dob, email, bio, phone, gender, location } = await request.json();

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    console.log('Received data:', { userId, fullName, dob, email, bio, phone, gender, location });

    let user = await xata.db.userDetails.filter({ userId: userId }).getFirst();

    if (user) {
      console.log('Updating existing user:', user.id);
      user = await xata.db.userDetails.update(user.id, { fullName, dob, email, bio, phone, gender, location });
    } else {
      console.log('Creating new user');
      user = await xata.db.userDetails.create({ userId, fullName, dob, email, bio, phone, gender, location });
    }

    console.log('Operation successful:', user);

    return NextResponse.json({ message: 'Profile updated successfully', user }, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/userProfile:', error);
    return NextResponse.json({ message: 'Failed to update profile', error: error }, { status: 500 });
  }
}