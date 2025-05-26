import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface DeletePromptDialogProps {
  displayPrompt: boolean;
  eligibililty: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteAccountDialog = ({
  displayPrompt,
  eligibililty,
  onCancel,
  onConfirm,
}: DeletePromptDialogProps) => {
  const [ackChecked, setAckChecked] = useState(false);
  return (
    <Dialog onOpenChange={onCancel} open={displayPrompt}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Delete Account Confirmation</DialogTitle>
        </DialogHeader>
        {eligibililty ? (
          <>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                This action is{' '}
                <span className="font-semibold text-red-600">destructive</span>{' '}
                and <span className="font-semibold">cannot be undone</span>.
              </p>
              <p>
                Before proceeding, please ensure all your{' '}
                <strong>embedded wallets are empty</strong>.
              </p>
              <p>
                You are <strong>solely responsible</strong> for verifying your
                funds are safely withdrawn before deleting your account.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="ack-checkbox"
                onCheckedChange={(checked) => setAckChecked(checked)}
              />
              <Label
                htmlFor="ack-checkbox"
                className="cursor-pointer text-sm leading-snug"
              >
                I confirm that my wallets are empty and I understand this action
                is irreversible.
              </Label>
            </div>

            <DialogFooter>
              <Button
                variant="destructive"
                disabled={!ackChecked}
                onClick={onConfirm}
              >
                Delete Account
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="space-y-4 text-sm text-gray-700">
              <p>Your account cannot be deleted at this time.</p>
              <p>
                Either your{' '}
                <strong>embedded wallet balance is not empty</strong>, or you
                are currently participating in an{' '}
                <strong>Early Access Program (EAP)</strong>.
              </p>
              <p>
                Please reach out to our official Discord server for assistance.
              </p>
            </div>

            <DialogFooter>
              <Button asChild>
                <a
                  href="https://discord.neur.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Discord Support
                </a>
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
